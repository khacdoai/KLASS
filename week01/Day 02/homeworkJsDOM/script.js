
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

function updateClock(){
  const now = new Date();
  $('#clock').textContent = now.toLocaleTimeString();
  const hrs = now.getHours();
  const greet = hrs < 12 ? 'Good morning'
             : hrs < 18 ? 'Good afternoon'
             : 'Good evening';
  $('#greeting').textContent = greet;
}
setInterval(updateClock,1000);updateClock();

const themeBtn = $('#themeBtn');
themeBtn.addEventListener('click',() => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

const LS = {
  get(key,def){return JSON.parse(localStorage.getItem(key))||def},
  set(key,val){localStorage.setItem(key,JSON.stringify(val))}
};

let todos = LS.get('todos',[]);   
const todoInput = $('#todoInput');
const todoError = $('#todoError');
const todoList  = $('#todoList');
let filterState = 'all';

function renderTodos(){
  todoList.innerHTML = '';
  todos.filter(t=>{
    if(filterState==='all') return true;
    if(filterState==='done') return t.done;
    if(filterState==='todo') return !t.done;
  })
  .forEach(t=>{
    const li = document.createElement('li');
    li.className = t.done ? 'done' : '';
    li.innerHTML = `
      <span class="todo‑left">
        <input type="checkbox" ${t.done?'checked':''} data-id="${t.id}">
        <span>${t.text}</span>
      </span>
      <button class="deleteBtn" data-id="${t.id}">Delete</button>`;
    todoList.appendChild(li);
  });
}
function addTodo(){
  const text = todoInput.value.trim();
  if(!text){todoError.textContent='Task cannot be empty';return}
  todoError.textContent='';
  todos.push({id:Date.now(),text,done:false});
  todoInput.value='';
  LS.set('todos',todos);
  renderTodos();
}
function toggleTodo(id){
  todos = todos.map(t=>t.id==id?({...t,done:!t.done}):t);
  LS.set('todos',todos); renderTodos();
}
function deleteTodo(id){
  todos = todos.filter(t=>t.id!=id);
  LS.set('todos',todos); renderTodos();
}
$('#addTodoBtn').addEventListener('click',addTodo);
todoInput.addEventListener('keydown',e=>{if(e.key==='Enter')addTodo()});
todoList.addEventListener('click',e=>{
  if(e.target.matches('input[type="checkbox"]')) toggleTodo(e.target.dataset.id);
  if(e.target.matches('.deleteBtn')) deleteTodo(e.target.dataset.id);
});
$$('.filter').forEach(btn=>{
  btn.addEventListener('click',()=>{
    $$('.filter').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    filterState = btn.dataset.filter;
    renderTodos();
  });
});
renderTodos();

let notes = LS.get('notes',[]);
const noteColors = ['#ffeb3b','#8bc34a','#ffccbc','#81d4fa','#d1c4e9'];
const noteInput  = $('#noteInput');
const noteError  = $('#noteError');
const notesWrap  = $('#notesContainer');

function renderNotes(){
  notesWrap.innerHTML='';
  notes.forEach(n=>{
    const box = document.createElement('div');
    box.className='note';
    box.style.background=n.color;
    box.innerHTML=`
      <button class="close" data-id="${n.id}">&times;</button>
      <p>${n.text}</p>`;
    notesWrap.appendChild(box);
  });
}
function addNote(){
  const text = noteInput.value.trim();
  if(!text){noteError.textContent='Note cannot be empty';return}
  noteError.textContent='';
  const color = noteColors[Math.floor(Math.random()*noteColors.length)];
  notes.push({id:Date.now(),text,color});
  noteInput.value='';
  LS.set('notes',notes); renderNotes();
}
function deleteNote(id){
  notes = notes.filter(n=>n.id!=id);
  LS.set('notes',notes); renderNotes();
}
$('#addNoteBtn').addEventListener('click',addNote);
noteInput.addEventListener('keydown',e=>{if(e.key==='Enter')addNote()});
notesWrap.addEventListener('click',e=>{
  if(e.target.classList.contains('close')) deleteNote(e.target.dataset.id);
});
renderNotes();
