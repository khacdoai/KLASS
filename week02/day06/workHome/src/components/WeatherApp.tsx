import React, { useEffect, useState } from 'react';
import styles from './WeatherApp.module.css';
import { WiDaySunny, WiHumidity, WiStrongWind } from 'react-icons/wi';
import { IoCellular, IoWifi, IoBatteryFull } from 'react-icons/io5';

type HourData = {
  timeLabel: string;   // “Now” | “15:00” …
  tempC: number;
  icon: string;        // URL từ WeatherAPI
};

type WeatherData = {
  city: string;
  tempC: number;
  conditionText: string;
  icon: string;  
  humidity: number;
  windKph: number;
  hourly: HourData[];
};

const API_KEY = 'c9a0ca46550648b29ce125849232709';

export default function WeatherApp() {
  const [city, setCity] = useState('LonDon');
  const [query, setQuery] = useState(city);        // cho ô nhập liệu
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>(() =>
  new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    );
    

  /* -------- Gọi API -------- */
  const fetchWeather = async (cityName: string) => {
    try {
      setLoading(true);
      setError(null);

      const curUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&aqi=no&lang=vi`;
      const forecastUrl = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=1&aqi=no&alerts=no&lang=vi`;

      const [curRes, foreRes] = await Promise.all([
        fetch(curUrl),
        fetch(forecastUrl),
      ]);
      if (!curRes.ok || !foreRes.ok) throw new Error('Không thể lấy dữ liệu');

      const curJson = await curRes.json();
      const foreJson = await foreRes.json();

      // Lấy 4 thời điểm đầu (Now + 3 giờ tới)
      const nowHour = new Date(foreJson.location.localtime).getHours();
      const hourly: HourData[] = foreJson.forecast.forecastday[0].hour
        .filter((h: any) => {
          const hour = new Date(h.time).getHours();
          return hour >= nowHour && hour <= nowHour + 7;
        })
        .map((h: any, idx: number) => ({
          timeLabel: idx === 0 ? 'Now' : new Date(h.time).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
          tempC: Math.round(h.temp_c),
          icon: 'https:' + h.condition.icon,
        }));

      const result: WeatherData = {
        city: curJson.location.name,
        tempC: Math.round(curJson.current.temp_c),
        conditionText: curJson.current.condition.text,
        icon: 'https:' + curJson.current.condition.icon,
        humidity: curJson.current.humidity,
        windKph: curJson.current.wind_kph,
        hourly,
      };
      setData(result);
      setCity(cityName);
    } catch (err: any) {
      setError(err.message || 'Đã có lỗi xảy ra');
    } finally {
      setLoading(false);
    }
  };

  /* Lấy dữ liệu lần đầu */
  useEffect(() => {
    fetchWeather(city);
  }, []);
  
  useEffect(() => {
  const timer = setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }));
  }, 60000); // cập nhật mỗi phút

  return () => clearInterval(timer); // dọn bộ đếm khi component unmount
}, []);

  /* -------- Xử lý submit search -------- */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) fetchWeather(query.trim());
  };

  /* -------- UI -------- */
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.searchWrapper}>
        <div className={styles.statusBar}>
        <span className={styles.clock}>{currentTime}</span>
        <div className={styles.statusIcons}>
            <span className={styles.signal}><IoCellular /></span>
            <span className={styles.wifi}><IoWifi /></span>
            <span className={styles.battery}><IoBatteryFull /></span>
        </div>
        </div>
        <input
          type="text"
          placeholder="Hanoi"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchBar}
        />
      </form>

      {loading && <p className={styles.status}>Đang tải…</p>}
      {error && <p className={styles.status}>{error}</p>}

      {data && !loading && (
        <>
          {/* Current Weather */}
          <div className={styles.mainWeather}>
            <div>
              <div className={styles.temperature}>{data.tempC}°</div>
              <div className={styles.description}>{data.conditionText}</div>
            </div>
            {/* Nếu icon PNG bị mờ, thay thế bằng WiDaySunny */}
            {data.icon ? (
              <img src={data.icon} alt={data.conditionText} className={styles.sunImg} />
            ) : (
              <WiDaySunny className={styles.sunIcon} />
            )}
          </div>

          {/* Humidity + Wind */}
          <div className={styles.infoBox}>
            <div>
              <WiHumidity size={24} />
              <span className={styles.infoTitle}>Humidity</span>
              <div className={styles.infoValue}>{data.humidity}%</div>
            </div>
            <div>
              <WiStrongWind size={24} />
              <span className={styles.infoTitle}>Wind</span>
              <div className={styles.infoValue}>{data.windKph.toFixed(1)} km/h</div>
            </div>
          </div>

          {/* Hourly Forecast */}
          {/* <div className={styles.hourlyBox}>
            {data.hourly.map((h) => (
              <div key={h.timeLabel} className={styles.hourItem}>
                <img src={h.icon} alt="icon" className={styles.smallIcon} />
                <div className={styles.temp}>{h.tempC}°</div>
                <div className={styles.time}>{h.timeLabel}</div>
              </div>
            ))}
          </div> */}
         <div className={styles.hourlyScrollWrapper}>
            <div className={styles.hourlyContainer}>
                {data.hourly.map((h, index) => (
                <div key={index} className={styles.hourItem}>
                    <img src={h.icon} className={styles.hourIcon} />
                    <div className={styles.temp}>{h.tempC}°</div>
                    <div className={styles.time}>{h.timeLabel}</div>
                </div>
                ))}
            </div>
            </div>
          
        </>
      )}
    </div>
  );
}
