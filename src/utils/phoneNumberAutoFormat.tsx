export const phoneNumberAutoFormat = (phoneNumber: string): string => {
  const number = phoneNumber.trim().replace(/[^0-9]/g, '')
  return number.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1)$2$3-$4')
}
