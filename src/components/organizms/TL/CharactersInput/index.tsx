import { VFC } from 'react'
import { selectTL, selectIsCharactersSelected, Character } from 'ducks/tl'
import { useAppSelector } from 'app/hooks'
import { MAX_LV, MAX_RANK, MAX_STAR } from 'lib/gameConstants'
import CharactersInputComponent from './presenter'

const DEFAULT_CHARACTERS: Character[] = [
  { name: '', star: MAX_STAR, rank: MAX_RANK, lv: MAX_LV, comment: '', specialLv: 0 },
  { name: '', star: MAX_STAR, rank: MAX_RANK, lv: MAX_LV, comment: '', specialLv: 0 },
  { name: '', star: MAX_STAR, rank: MAX_RANK, lv: MAX_LV, comment: '', specialLv: 0 },
  { name: '', star: MAX_STAR, rank: MAX_RANK, lv: MAX_LV, comment: '', specialLv: 0 },
  { name: '', star: MAX_STAR, rank: MAX_RANK, lv: MAX_LV, comment: '', specialLv: 0 },
]

const CharactersInput: VFC = () => {
  const tl = useAppSelector(selectTL)
  const isCharactersSelected = useAppSelector(selectIsCharactersSelected)
  if (isCharactersSelected) {
    return <CharactersInputComponent characters={tl.characters} />
  }
  return <CharactersInputComponent characters={DEFAULT_CHARACTERS} />
}

export default CharactersInput
