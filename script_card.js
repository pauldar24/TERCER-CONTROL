const Card = ({ category, srcimagen, title, description, price }) => {
    return (
      <div class="productRow" data-category={category}>
        <img src={srcimagen} width="200" height="267" class="product-img" />
        <div>
          <h5 class="product-title">{title}</h5>
          <p class="product-description">{description}</p>
        </div>
        <small class="product-price">{price}</small>
      </div>
    );
  };
  
  const CardList = ({ cardsData }) => (
    <div class="content-section">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          category={card.category}
          srcimagen={card.src}
          title={card.title}
          description={card.description}
          price={card.price}
        />
      ))}
    </div>
  );