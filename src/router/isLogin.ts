
const isLogin = ()=>{
  const login = localStorage.getItem('login');
  return login === null;
}

const isWriter = ()=>{
  const inform = localStorage.getItem('inform');
  return inform !== '2';
}

export {
  isLogin,
  isWriter,
};