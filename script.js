const valida = document.querySelector('.trybewarts-login');
const validaLogin = valida[0];
const validaSenha = valida[1];
const validaBotao = document.querySelector('#login-button');

function login() {
  const login2 = validaLogin.value === 'tryber@teste.com';
  const senha = validaSenha.value === '123456';

  if (login2 && senha) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

validaBotao.addEventListener('click', login);
