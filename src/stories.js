export default function Stories () {
    function storyCreator(image, name)
    {
        this.imageDir =`assets/img/${image}`;
        this.name = name;
    }

    const stories =[
    new storyCreator("9gag.svg", "9gag"),
    new storyCreator("meowed.svg", "meowed"),
    new storyCreator("barked.svg", "barked"),
    new storyCreator("nathanwpylestrangeplanet.svg", "nathanwpylestrangeplanet"),
    new storyCreator("wawawicomics.svg", "wawawicomics"),
    new storyCreator("respondeai.svg", "respondeai"),
    new storyCreator("filomoderna.svg", "filomoderna"),
    new storyCreator("memeriagourmet.svg", "memeriagourmet"),
    ]

    return (<div className="stories">
              {stories.map(story => 
                <div key={story.name} className="story">
                  <div className="imagem">
                    <img alt="" src={story.imageDir} />
                  </div>
                  <div className="usuario">
                    {story.name}
                  </div>
                </div>
              )}
              <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
              </div>
            </div>)
}