import PropTypes from 'prop-types';

export default function Painting({ url, title, profileUrl, author, price, quantity }) {
    return (<div>
        <img src={url} alt={title} width="480" />
        <h2>{title}</h2>
        <p>
            Автор: <a href={profileUrl}>{author}</a>
        </p>
        <p>Цена: {price} кредитов</p>
        <p>Доступность: {quantity < 10 ? "заканчивается" : "есть в наличии"}</p>
        <button type="button">Добавить в корзину</button>
    </div>
    );
};

Painting.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    profileUrl: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
}