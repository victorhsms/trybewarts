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

function buttonEnable(event) {
  const buttonForm = document.querySelector('#submit-btn');
  if (event.target.checked) {
    buttonForm.disabled = false;
  } else {
    buttonForm.disabled = true;
  }
}

const infoLabel = document.querySelector('#agreement');
infoLabel.addEventListener('change', buttonEnable);
