export default function Posts() {
  const posts = [{
    profilePicture:'assets/img/barked.svg',
    profileName: 'barked',
    postPicture: 'assets/img/dog.svg',
    likeProfilePicture: 'assets/img/adorable_animals.svg',
    likeProfileName: 'adorable_animals',
    likeNumber: '99.159',
  },
  {profilePicture:'assets/img/meowed.svg',
  profileName: 'meowed',
  postPicture: 'assets/img/gato-telefone.svg',
  likeProfilePicture: 'assets/img/respondeai.svg',
  likeProfileName: 'respondeai',
  likeNumber: '101.523'}]

    return (
      <div className="posts">
        {posts.map(post => {return(
  <div key={post.profileName} className="post">
    <div className="topo">
      <div className="usuario">
        <img alt="" src= {post.profilePicture}/>
        {post.profileName}
      </div>
      <div className="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>

    <div className="conteudo">
      <img alt="" src={post.postPicture} />
    </div>

    <div className="fundo">
      <div className="acoes">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div className="curtidas">
        <img alt="" src={post.likeProfilePicture}/>
        <div className="texto">
          Curtido por <strong>{post.likeProfileName}</strong> e <strong>outras {post.likeNumber} pessoas</strong>
        </div>
      </div>
    </div>
  </div>)})}
      </div>
    );
}