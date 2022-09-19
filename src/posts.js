import { useState } from "react";

const posts = [
  {
    id: 1,
    profilePicture: "assets/img/barked.svg",
    profileName: "barked",
    postPicture: "assets/img/dog.svg",
    likeProfilePicture: "assets/img/adorable_animals.svg",
    likeProfileName: "adorable_animals",
    likeNumber: "99.159",
    liked: false,
    saved: false,
    runLikeAnimation: false,
  },
  {
    id: 2,
    profilePicture: "assets/img/meowed.svg",
    profileName: "meowed",
    postPicture: "assets/img/gato-telefone.svg",
    likeProfilePicture: "assets/img/respondeai.svg",
    likeProfileName: "respondeai",
    likeNumber: "101.523",
    liked: false,
    saved: false,
    runLikeAnimation: false,
  },
];

function Post({ props, setAllPostsState, allPosts, ...rest }) {
  return (
    <div key={props.profileName} className="post">
      <div className="topo">
        <div className="usuario">
          <img alt="" src={props.profilePicture} />
          {props.profileName}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div
        onDoubleClick={() =>{
          handleLike(props.id, setAllPostsState, allPosts, 'photo');}
        }
        className="conteudo"
      >
        <img alt="" src={props.postPicture} />
        <ion-icon class={props.runLikeAnimation ?"md hydrated run-like-animation" : "md hydrated hidden"} name="heart"></ion-icon>
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              onClick={() =>
          handleLike(props.id, setAllPostsState, allPosts, 'heart')}
              id="like"
              name={props.liked? "heart" : "heart-outline"}
              class={props.liked? "md hydrated liked-post-color": "md hydrated"}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              id="bookmark"
              name={props.saved? "bookmark": "bookmark-outline"}
              onClick={() =>
          handleLike(props.id, setAllPostsState, allPosts, 'banner')
        }
            ></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img alt="" src={props.likeProfilePicture} />
          <div className="texto">
            Curtido por <strong>{props.likeProfileName}</strong> e{" "}
            <strong>outras {props.likeNumber} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Posts() {
  const [allPosts, setAllPostsState] = useState(posts);
  return (
    <div className="posts">
      {allPosts.map((post) => (
        <Post
          key={post.id}
          props={post}
          setAllPostsState={setAllPostsState}
          allPosts={allPosts}
        />
      ))}
    </div>
  );
}


function handleLike(id, setAllPostsState, allPosts, location,) {
  const postsRecreated = allPosts.map((el) => {
    if (id === el.id && location === 'photo') {
      el.liked = true;
      el.runLikeAnimation = true;
      setTimeout(() => {el.runLikeAnimation = false;}, 800);
    }
    else if (id === el.id && location === 'heart') {
      el.liked = !el.liked;
    }
    if (id === el.id && location === 'banner')
    {
      el.saved = !el.saved;
    }
    return el
  });
  setTimeout(() => setAllPostsState(postsRecreated), 800);
  setAllPostsState(postsRecreated);
}
