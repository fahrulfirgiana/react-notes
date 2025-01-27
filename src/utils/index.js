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
