'use client'
import { FC } from 'react'
import PopupResult from '../PopupResult'

interface Props {
  show: boolean
  result: number | null
  onFinish?: () => void
}

const D4: FC<Props> = ({ show, result, onFinish }) => (
  <PopupResult show={show} result={result} diceType={4} onFinish={onFinish} />
)

export default D4
