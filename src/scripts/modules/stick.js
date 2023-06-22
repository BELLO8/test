/* eslint-disable */

const sticky = () => {
    const header = document.querySelector('.c-header');
    const sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
};
export default sticky;
