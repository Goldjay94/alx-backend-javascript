export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve(true);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
