export const regexLogin = '^(?=.{3,20}$)([a-zA-Z0-9_-]*[a-zA-Z_-][a-zA-Z0-9_-]*)$';
export const regexPass = '^(?=.*?[A-ZА-ЯЁ])(?=.*?[0-9]).{8,40}$';
export const regexEmail = '^[a-zA-Z0-9_-]+@[a-zA-Z]+.[a-zA-Z]+$';
export const regexName = '^[A-ZА-ЯЁ][a-zA-Zа-яА-ЯёЁ]+$';
export const regexPhone = '^\\+?\\d{10,15}$';
export const regexNickname = '^.*\\S{3,}.*$';
export const regexMessage = '^.*\\S.*$';
