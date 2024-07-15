const galleryImagesArray = [
  {
    src: "../../assets/img/plant-img-1.jpg",
    alt: "",
    className: "plantImg1",
    plantName: "Plant Name",
    plantDetails: "plant Details",
  },
  {
    src: "../../assets/img/plant-img-2.jpg",
    alt: "",
    className: "plantImg2",
    plantName: "Plant Name",
    plantDetails: "plant Details",
  },
  {
    src: "../../assets/img/plant-img-3.jpg",
    alt: "",
    className: "plantImg3",
    plantName: "Plant Name",
    plantDetails: "plant Details",
  },
  {
    src: "../../assets/img/plant-img-4.jpg",
    alt: "",
    className: "plantImg4",
    plantName: "Plant Name",
    plantDetails: "plant Details",
  },
  {
    src: "../../assets/img/plant-img-5.jpg",
    alt: "",
    className: "plantImg4",
    plantName: "Plant Name",
    plantDetails: "plant Details",
  },
  {
    src: "../../assets/img/plant-img-6.jpg",
    alt: "",
    className: "plantImg4",
    plantName: "Plant Name",
    plantDetails: "plant Details",
  },
  {
    src: "../../assets/img/plant-img-7.jpg",
    alt: "",
    className: "plantImg4",
    plantName: "Plant Name",
    plantDetails: "plant Details",
  },
  {
    src: "../../assets/img/plant-img-8.jpg",
    alt: "",
    className: "plantImg4",
    plantName: "Plant Name",
    plantDetails: "plant Details",
  },
  {
    src: "../../assets/img/plant-img-9.jpg",
    alt: "",
    className: "plantImg4",
    plantName: "Plant Name",
    plantDetails: "plant Details",
  },
  {
    src: "../../assets/img/plant-img-10.jpg",
    alt: "",
    className: "plantImg4",
    plantName: "Plant Name",
    plantDetails: "plant Details",
  },
  {
    src: "../../assets/img/plant-img-11.jpg",
    alt: "",
    className: "plantImg4",
    plantName: "Plant Name",
    plantDetails: "plant Details",
  },
  {
    src: "../../assets/img/plant-img-12.jpg",
    alt: "",
    className: "plantImg4",
    plantName: "Plant Name",
    plantDetails: "plant Details",
  },
  {
    src: "../../assets/img/plant-img-13.jpg",
    alt: "",
    className: "plantImg4",
    plantName: "Plant Name",
    plantDetails: "plant Details",
  },
  {
    src: "../../assets/img/plant-img-14.jpg",
    alt: "",
    className: "plantImg4",
    plantName: "Plant Name",
    plantDetails: "plant Details",
  },
  {
    src: "../../assets/img/plant-img-15.jpg",
    alt: "",
    className: "plantImg4",
    plantName: "Plant Name",
    plantDetails: "plant Details",
  },
  {
    src: "../../assets/img/plant-img-16.jpg",
    alt: "",
    className: "plantImg4",
    plantName: "Plant Name",
    plantDetails: "plant Details",
  },
  {
    src: "../../assets/img/plant-img-17.jpg",
    alt: "",
    className: "plantImg4",
    plantName: "Plant Name",
    plantDetails: "plant Details",
  },
  {
    src: "../../assets/img/plant-img-18.jpg",
    alt: "",
    className: "plantImg4",
    plantName: "Plant Name",
    plantDetails: "plant Details",
  },
  {
    src: "../../assets/img/plant-img-19.jpg",
    alt: "",
    className: "plantImg4",
    plantName: "Plant Name",
    plantDetails: "plant Details",
  },
  {
    src: "../../assets/img/plant-img-20.jpg",
    alt: "",
    className: "plantImg4",
    plantName: "Plant Name",
    plantDetails: "plant Details",
  },
  {
    src: "../../assets/img/plant-img-21.jpg",
    alt: "",
    className: "plantImg4",
    plantName: "Plant Name",
    plantDetails: "plant Details",
  },
  {
    src: "../../assets/img/plant-img-22.jpg",
    alt: "",
    className: "plantImg4",
    plantName: "Plant Name",
    plantDetails: "plant Details",
  },
  {
    src: "../../assets/img/plant-img-23.jpg",
    alt: "",
    className: "plantImg4",
    plantName: "Plant Name",
    plantDetails: "plant Details",
  },
  {
    src: "../../assets/img/plant-img-24.jpg",
    alt: "",
    className: "plantImg4",
    plantName: "Plant Name",
    plantDetails: "plant Details",
  },
  {
    src: "../../assets/img/plant-img-25.jpg",
    alt: "",
    className: "plantImg4",
    plantName: "Plant Name",
    plantDetails: "plant Details",
  },
  {
    src: "../../assets/img/plant-img-26.jpg",
    alt: "",
    className: "plantImg4",
    plantName: "Plant Name",
    plantDetails: "plant Details",
  },
  {
    src: "../../assets/img/plant-img-27.jpg",
    alt: "",
    className: "plantImg4",
    plantName: "Plant Name",
    plantDetails: "plant Details",
  },

];


const imageContainer = document.getElementById("plantsGalleryContainer");
const imageHtml = galleryImagesArray.map((imageObject) => {
  console.log(imageObject);
  return `<div class="plantImg">
      <img src="${imageObject.src}" 
      alt="${imageObject.plantName}"
      class="${imageObject.className}"
      />
        <div class="plantInfo">
          <h1 class="plantName">${imageObject.plantName}</h1>
          <p class="plantDetails">${imageObject.plantDetails}</p>
        </div>
      </div>`;
});

console.log(imageHtml);

imageContainer.innerHTML = imageHtml.join("");
