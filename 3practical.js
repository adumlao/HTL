//<img id=”myimage” src=”​http://hashtag­analytics.com/myimage.jpg​” width=”300” height=”250”/>

const pic = document.querySelector('#myimage');

const bounding = pic.getBoundingClientRect();


const inView = () => {
  if (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  ) {
    console.log('VISIBLE');
  };
};

setInterval(inView, 2000);
