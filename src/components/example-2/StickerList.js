import { Component } from 'react';
import { Sticker } from './Sticker';
import { List } from 'components/StickerList.styled';

export class StickerList extends Component {
  state = {
    selectedIdx: null,
  };

  changeIdx = idx => {
    this.setState({ selectedIdx: idx });
  };

  render() {
    const { selectedIdx } = this.state;
    const { stickers } = this.props;

    return (
      <List>
        {stickers.map((sticker, idx) => (
          <li key={idx}>
            <Sticker
              sticker={sticker}
              onSelect={() => this.changeIdx(idx)}
              isSelected={selectedIdx === idx}
            />
          </li>
        ))}
      </List>
    );
  }
}

// нам треба отримати індекс кожної натиснутого <Sticker/>, але в середині
// <Sticker/> ми не можемо отримати індекс, тому ми на 24 рядку передаємо
// через анонімну функцію метод this.changeIdx(idx) який приймає наш idx
// з 19 рядку з {stickers.map((sticker, idx)

// на 25 рядку, ми порівнюємо, якщо наш selectedIdx той що в стані співпадає
// з індексом в мепі {stickers.map((sticker, idx), то він дорівнює true
// і співпадає, приклад від Саші

// [a, b, c]
// selectedIdx 2
// a -> idx 0 -> false
// b -> idx 1 -> false
// c -> idx 2 -> true
