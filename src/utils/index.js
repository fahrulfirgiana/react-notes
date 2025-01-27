<<<<<<< HEAD
const showFormattedDate = (date, locale = 'id-ID') => {
  const options = {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  };

  return new Date(date).toLocaleDateString(locale, options);
};

export { showFormattedDate };
=======
const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('id-ID', options);
};

export { showFormattedDate };
>>>>>>> b965f73a06a1a96b319ea9946c364289b5417027
