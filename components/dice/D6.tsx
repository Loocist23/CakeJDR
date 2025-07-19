'use client'
import { FC } from 'react'
import PopupResult from '../PopupResult'

interface Props {
  show: boolean
  result: number | null
  onFinish?: () => void
}

const D6: FC<Props> = ({ show, result, onFinish }) => (
  <PopupResult show={show} result={result} diceType={6} onFinish={onFinish} />
)

export default D6
