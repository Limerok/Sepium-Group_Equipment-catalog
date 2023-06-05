const categoryContainer = document.querySelector('.list-category');
const templateCategory = document.querySelector('#template-category').content;

function renderCategory(img, name, link) {
  const cloneCategory = templateCategory.querySelector('.list-category__item').cloneNode(true);
  const imageCategory = cloneCategory.querySelector('.list-category__image');
  const titleCategory = cloneCategory.querySelector('.list-category__title');
  const linkImage = cloneCategory.querySelector('.list-category__link-image');
  const linkTitle = cloneCategory.querySelector('.list-category__link-title');

  imageCategory.src = img;
  imageCategory.alt = name;
  titleCategory.textContent = name;
  linkImage.href = link;
  linkTitle.href = link;

  return cloneCategory;
}

function createCategory(img, name, link) {
  const newCategory = renderCategory(img, name, link);
  
  categoryContainer.append(newCategory);
}

initialCategory.forEach((item) => {
  const img = item.img;
  const name = item.name;
  const link = item.link;
  
  createCategory(img, name, link);
})