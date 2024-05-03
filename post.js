//Complete this JS file to render the post1 on the screen with all the specified tags.
// let post1 = {
//   id: 1,
//   author: "John",
//   content: "My first Post!",
//   likes: 10,
//   comments: ["Great post!", "Nice photo!"],
//   image: "https://files.codingninjas.in/image2-28694.jpg",
// };

// const postDiv = document.getElementById("posts");

// const postInside = document.createElement("div");
// postInside.className = "post";

// const headingAuth = document.createElement("h3");
// headingAuth.textcontent = post1.author;

// const imgsection = document.createElement("img");
// imgSection.src = post1.image;
// imgSection.alt = "Post Image";

// const paraSection = document.createElement("p");
// paraSection.textcontent = post1.content;

// const likeButton = document.createElement("button");
// likeButton.textContent = "Like";

// const commentInput = document.createElement("input");
// commentinput.type = "text";

// const commentButton = document.createElement("button");
// commentButton.textContent = "Comment";

// const postFooter = document.createElement("div");
// postFooter.className = "post-footer";
// postFooter.textContent = `Likes: ${post1.likes} Comments: ${post1.comments.length}`;

// const commentsContainer = document.createElement("div");
// commentsContainer.className = "comments-container";

// post1.comments.forEach((comment) => {
//   const commentParagraph = document.createElement("p");
//   commentParagraph.textContent = comment;
//   commentsContainer.appendChild(commentParagraph);
// });

// postFooter.addEventListener("click", () => {
//   if (
//     commentsContainer.style.display === "none" ||
//     commentsContainer.style.display === ""
//   ) {
//     commentsContainer.style.display = "block";
//   } else {
//     commentsContainer.style.display = "none";
//   }
// });

// postInside.appendChild(headingAuth);

// postInside.appendChild(imgsection);
// postInside.appendChild(paraSection);
// postInside.appendChild(likeButton);
// postInside.appendChild(commentInput);
// postInside.appendChild(commentButton);
// postInside.appendChild(postFooter);
// postInside.appendChild(commentsContainer);

// postDiv.appendChild(postInside);

//Complete this JS file to render the post1 on the screen with all the specified tags.
let post1 = {
  id: 1,
  author: "John",
  content: "My first Post!",
  likes: 10,
  comments: ["Great post!", "Nice photo!"],
  image: "https://files.codingninjas.in/image2-28694.jpg",
};

const postDiv = document.getElementById("posts");

const postContainer = document.createElement("div");
postContainer.className = "post";

const authorHeader = document.createElement("h3");
authorHeader.textContent = post1.author;

const postImage = document.createElement("img");
postImage.src = post1.image;
postImage.alt = "Post Image";

const contentParagraph = document.createElement("p");
contentParagraph.textContent = post1.content;

const likeButton = document.createElement("button");
likeButton.textContent = "Like";

const commentInput = document.createElement("input");
commentInput.type = "text";

const commentButton = document.createElement("button");
commentButton.textContent = "Comment";

const postFooter = document.createElement("div");
postFooter.className = "post-footer";
postFooter.textContent = `Likes: ${post1.likes} Comments: ${post1.comments.length}`;

const commentsContainer = document.createElement("div");
commentsContainer.className = "comments-container";

post1.comments.forEach((comment) => {
  const commentParagraph = document.createElement("p");
  commentParagraph.textContent = comment;
  commentsContainer.appendChild(commentParagraph);
});

postFooter.addEventListener("click", () => {
  if (
    commentsContainer.style.display === "none" ||
    commentsContainer.style.display === ""
  ) {
    commentsContainer.style.display = "block";
  } else {
    commentsContainer.style.display = "none";
  }
});

postDiv.appendChild(postContainer);
postContainer.appendChild(authorHeader);
postContainer.appendChild(postImage);
postContainer.appendChild(contentParagraph);
postContainer.appendChild(likeButton);
postContainer.appendChild(commentInput);
postContainer.appendChild(commentButton);
postContainer.appendChild(postFooter);
postContainer.appendChild(commentsContainer);
