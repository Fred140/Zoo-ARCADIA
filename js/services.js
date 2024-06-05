const servicesImage = document.getElementById ("allImages");

let monImage = getImage ("../Assets/restaurant.jpg");

servicesImage.innerHTML = monImage;

function getImage (urlImage) { 
    return  `
    <div class="col ">
    <div class= "pb-3">
    <img class="rounded w-100" src="${urlImage}">
    <div class="action-image-buttons" data-show="admin">
      <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></button>
      <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#DeletePhotoModal"><i class="bi bi-trash"></i></button>
    </div>
      <div class="pt-5 mb">
       <img class="rounded w-100" src="${urlImage}">
      </div>
    </div>`;
}