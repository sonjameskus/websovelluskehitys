'use strict';

import {apiUrl} from './modules/variables.js';

const token = localStorage.getItem('token');

const loginView = document.querySelector('#loginView');
const registerView = document.querySelector('#registerView');
const loggedInView = document.querySelector('#loggedInView');

function showLogin() {
  loginView.style.display = 'block';
  registerView.style.display = 'none';
  loggedInView.style.display = 'none';
}

function showRegister() {
  loginView.style.display = 'none';
  registerView.style.display = 'block';
  loggedInView.style.display = 'none';
}

function showLoggedIn() {
  loginView.style.display = 'none';
  registerView.style.display = 'none';
  loggedInView.style.display = 'block';
  console.log('User is logged in');
}

document.querySelector('#showRegister').addEventListener('click', (e) => {
  e.preventDefault();
  showRegister();
});

document.querySelector('#showLogin').addEventListener('click', (e) => {
  e.preventDefault();
  showLogin();
});

document.querySelector('#loginBtn').addEventListener('click', async () => {
  try {
    const user = await login(loginUser.value, loginPass.value);

    showLoggedIn();
    loadUserData();

  } catch (err) {
    alert(err.message);
  }
});

document.querySelector('#registerBtn').addEventListener('click', async () => {
  try {
    await register(regUser.value, regPass.value, regEmail.value);

    alert('Rekisteröinti onnistui');
    showLogin();
  } catch (err) {
    alert(err.message);
  }
});

if (localStorage.getItem('token')) {
  showLoggedIn();
  loadUserData();
} else {
  showLogin();
}

document.querySelector('#logoutBtn').addEventListener('click', () => {
  localStorage.removeItem('token');
  showLogin();
});

document.querySelector('#changeUserNameBtn').addEventListener('click', async () => {
  const newName = prompt('Uusi käyttäjätunnus:');

  if (!newName) return;

  await updateUser({ username: newName });

  loadUserData();
});

document.querySelector('#changeEmailBtn').addEventListener('click', async () => {
  const newEmail = prompt('Uusi email:');

  if (!newEmail) return;

  await updateUser({ email: newEmail });

  loadUserData();
});

async function register(username, password, email) {
  try {
    const res = await fetch(apiUrl + '/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Rekisteröinti epäonnistui');
    }

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function login(username, password) {
  try {
    const res = await fetch(apiUrl + '/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Kirjautuminen epäonnistui');
    }

    localStorage.setItem('token', data.token);

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function getUserProfile() {
  const token = localStorage.getItem('token');

  const res = await fetch(apiUrl + '/users/token', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error('User fetch failed');
  }

  return await res.json();
}

async function loadUserData() {
  const user = await getUserProfile();

  document.querySelector('#usernameDisplay').textContent = user.username;
  document.querySelector('#emailDisplay').textContent = user.email;

  const res = await fetch(apiUrl + '/restaurants');
  const restaurants = await res.json();

  const fav = restaurants.find((r) => r._id === user.favouriteRestaurant);

  const list = document.querySelector('#favoritesList');
  list.innerHTML = '';

  if (fav) {
    const li = document.createElement('li');
    li.textContent = fav.name;
    list.appendChild(li);
  } else {
    list.textContent = 'Ei suosikkia';
  }
}

async function updateUser(data) {
  try {
    const res = await fetch(apiUrl + '/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error(data.message || 'Tietojen päivitys epäonnistui');
    }

    return await res.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
}


