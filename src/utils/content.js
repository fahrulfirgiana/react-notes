const home = {
  id: {
    header: "Aplikasi Catatan",
    subheader: "Sistem pengelolaan catatan pribadi",
    paragraph:
      "Aplikasi ini membantu Anda untuk mencatat dan mengelola catatan pribadi Anda dengan mudah dan cepat. Anda dapat menambah, mengedit, atau mengarsipkan catatan sesuai kebutuhan.",
  },
  en: {
    header: "NoteApp",
    subheader: "Personal note management system",
    paragraph:
      "This app helps you to record and manage your personal notes quickly and easily. You can add, edit, or archive notes as you need.",
  },
};
const arsip = {
  id: {
    header: "Catatan Arsip",
    subheader: "Melihat catatan yang sudah diarsipkan",
    paragraph:
      "Di sini Anda dapat melihat dan mencari catatan yang sudah diarsipkan. Gunakan fitur pencarian untuk menemukan catatan tertentu.",
  },
  en: {
    header: "Archived Notes",
    subheader: "View your archived notes",
    paragraph:
      "Here you can view and search for notes that have been archived. Use the search feature to find a specific note.",
  },
};
const login = {
  id: {
    header: "Silakan masuk untuk melanjutkan...",
    emailPlaceholder: "contoh@gmail.com",
    passwordPlaceholder: "Masukkan kata sandi (min. 6 karakter)",
    loginButton: "Login",
    registerLink: "Belum punya akun? ",
    link: "Daftar di sini.",
  },
  en: {
    header: "Please login to continue...",
    emailPlaceholder: "example@gmail.com",
    passwordPlaceholder: "Enter password (min. 6 characters)",
    loginButton: "Login",
    registerLink: "Don’t have an account? ",
    link: "Register here.",
  },
};
const register = {
  id: {
    header: "Daftar",
    registerButton: "Daftar",
    name: "Masukkan nama lengkap Anda",
    email: "contoh@gmail.com",
    password: "Masukkan kata sandi (min. 6 karakter)",
    confirmPassword: "Konfirmasi kata sandi Anda",
    registerLink: "Sudah punya akun? ",
    link: "Login di sini.",
    labels: {
      name: "Nama Lengkap",
      email: "Email",
      password: "Kata Sandi",
      confirmPassword: "Konfirmasi Kata Sandi",
    },
  },
  en: {
    header: "Register",
    registerButton: "Register",
    name: "Enter your full name",
    email: "example@email.com",
    password: "Enter password (min. 6 characters)",
    confirmPassword: "Confirm your password",
    loginLink: "Back to Login",
    registerLink: "already have an account? ",
    link: "Login here.",
    labels: {
      name: "Full Name",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
    },
  },
};

const navbar = {
  id: {
    themeChange: "Ganti Tema",
    languageChange: "Ganti Bahasa",
    logout: "Logout",
  },
  en: {
    themeChange: "Change Theme",
    languageChange: "Change Language",
    logout: "Logout",
  },
};

const noteInput = {
  id: {
    titlePlaceholder: "Catatan Rahasia",
    bodyPlaceholder: "Sebenarnya saya adalah",
    addButton: "Tambah",
  },
  en: {
    titlePlaceholder: "Secret Note",
    bodyPlaceholder: "Actually, I am a...",
    addButton: "Add",
  },
};

export default { home, arsip, login, register, navbar, noteInput };
