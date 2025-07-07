import React from 'react'
import Style from './FormRegister.module.css'

type Props = {}

export default function FormRegisterChuan({ }: Props) {
    const [FormData, setFormData] = React.useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        Phone: '',
        gender: '',
        date: '',
        country: '',
        hobbies: '',
        img: '',
        bio: '',
    })

    const handlevalue = (event: any) => {  // xử lí các dlieu input, textarea , checkbox do ngươid dùng nhập 
        const { name, value } = event.target    // name là tên input, value là giá trị input 
        // name: tên field bạn đang nhập(ví dụ "email", "password", "bio"...).

        //     value: giá trị bạn vừa nhập vào(ví dụ "huy@gmail.com").
        setFormData(prev => ({ ...prev, [name]: value }))
        //dòng ...prev : Sao chép lại toàn bộ dữ liệu hiện có trong FormData.
        //   [name]: lấy giá trị của name trong event.target
        //   value: lấy giá trị của value trong event.target
        // name = "email" và value = "abc@gmail.com" dòng này trở thành: { email: "abc@gmail.com" }.
        // Nó cập nhật đúng field bạn vừa nhập và giữ nguyên các field khác.

    }

    const [isSubmit, setisSubmit] = React.useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // validate và xử lý dữ liệu ở đây
        if (
            FormData.name.length > 3 &&
            FormData.email.includes('@') &&
            FormData.email.includes('.com') &&
            FormData.password.length > 6 &&
            FormData.confirmPassword.length > 6 &&
            FormData.confirmPassword === FormData.password
        ) {
            setisSubmit(true)
            alert("Đăng ký thành công!")
        } else {
            alert("Please check your data")
            setisSubmit(false)
        }
    }

    const isOver18 = (dob: string) => {
        const birth = new Date(dob);
        const today = new Date();
        const age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        const dayDiff = today.getDate() - birth.getDate();

        return (
            age > 18 || (age === 18 && (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)))
        );
    };

    return (
        <div className={Style.container}>
            <h1>User Register</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Full Name</label>
                    <input
                        type='text'
                        name='name'
                        placeholder='Fill Full Name.....'
                        onChange={handlevalue}
                    />
                    {
                        FormData.name.length < 3 ? <p style={{ color: 'red' }}>"Full name must be at lease 3 charater"</p> : ""
                    }
                </div>

                <div>
                    <label>Email</label>
                    <input
                        type='email'
                        name='email'
                        placeholder='Fill Email.....'
                        onChange={handlevalue}
                    />
                    {
                        FormData.email.length === 0 ?
                            (<p style={{ color: 'red' }}>Invalid Email</p>) :
                            !FormData.email.includes('@') || !FormData.email.includes('.com') ?
                                (<p style={{ color: 'red' }}>Email is Error</p>) :
                                null
                    }
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type='password'
                        name='password'
                        placeholder='Fill Password.....'
                        onChange={handlevalue}
                    />
                    {
                        FormData.password.length < 6 ? <p style={{ color: 'red' }}>"Password must be at lease 6 charater"</p> : ""
                    }
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input
                        type='password'
                        name='confirmPassword'
                        placeholder='Fill Confirm Password.....'
                        onChange={handlevalue}
                    />
                    {
                        FormData.confirmPassword !== FormData.password ? <p style={{ color: 'red' }}>"Confirm Password does not match"</p> : ""
                    }
                </div>

                <div>
                    <label>Phone</label>
                    <input
                        type='tel'
                        name='Phone'
                        placeholder='Fill Phone.....'
                        onChange={handlevalue}
                    />
                    {
                        FormData.Phone.length === 0 ?
                            (<p style={{ color: 'red' }}>Invalid Phone</p>) :
                            !FormData.Phone.includes('+') && FormData.Phone.length < 10 ?
                                (<p style={{ color: 'red' }}>Phone is Error</p>) :
                                null
                    }
                </div>

                <div>
                    <label>Gender</label>
                    <div>
                        <input type="radio" name="gender" value="male" onChange={handlevalue} /> Male
                        <input type="radio" name="gender" value="female" onChange={handlevalue} /> Female
                        <input type="radio" name="gender" value="other" onChange={handlevalue} /> Other
                    </div>
                    {
                        FormData.gender === '' ? <p style={{ color: 'red' }}>Vui Lòng chọn Giới tính </p> : ""
                    }
                </div>

                <div>
                    <label>Date</label>
                    <input
                        type='date'
                        name='date'
                        placeholder='Fill Date.....'
                        onChange={handlevalue}
                    />
                    {
                        FormData.date === '' ? <p style={{ color: 'red' }}>Vui Lòng chọn Ngày Sinh </p> : !isOver18(FormData.date) ? <p style={{ color: 'red' }}>Bạn phải trên 18 tuổi</p> : ""
                    }
                </div>

                <div>
                    <label>Country</label>
                    <div>
                        <select name="country" onChange={handlevalue}>
                            <option value="">Select Country</option>
                            <option value="Vietnam">Vietnam</option>
                            <option value="USA">USA</option>
                            <option value="Canada">Canada</option>
                        </select>
                    </div>
                    {
                        FormData.country === '' ? <p style={{ color: 'red' }}>Vui Lòng chọn Quốc gia</p> : ""
                    }
                </div>

                <div>
                    <label>Hobbies</label>
                    <div>
                        <input type="radio" name="hobbies" value="Reading" onChange={handlevalue} /> Reading
                        <input type="radio" name="hobbies" value="Treaveling" onChange={handlevalue} /> Treaveling
                        <input type="radio" name="hobbies" value="Gaming" onChange={handlevalue} /> Gaming
                    </div>
                    {
                        FormData.hobbies === '' ? <p style={{ color: 'red' }}>Vui Lòng chọn Hobi</p> : ""
                    }
                </div>

                <div>
                    <label>Image</label>
                    <input
                        type='file'
                        name='img'
                        onChange={handlevalue}
                    />
                </div>

                <div>
                    <label>Bio</label>
                    <textarea
                        name='bio'
                        placeholder='Fill Bio.....'
                        onChange={handlevalue}
                    />
                </div>

                <button type="submit">
                    ReGister
                </button>
            </form>

            {
                isSubmit && (
                    <ul>
                        <li>Full Name: {FormData.name}</li>
                        <li>Email: {FormData.email}</li>
                        <li>Password: {FormData.password}</li>
                        <li>Confirm Password: {FormData.confirmPassword}</li>
                        <li>Phone: {FormData.Phone}</li>
                        <li>Gender: {FormData.gender}</li>
                        <li>Date: {FormData.date}</li>
                        <li>Country: {FormData.country}</li>
                        <li>Hobbies: {FormData.hobbies}</li>
                        <li>Image: {FormData.img}</li>
                        <li>Bio: {FormData.bio}</li>
                    </ul>
                )
            }
        </div>
    )
}
