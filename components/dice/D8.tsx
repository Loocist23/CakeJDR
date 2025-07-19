'use client'
import { FC } from 'react'
import PopupResult from '../PopupResult'

interface Props {
  show: boolean
  result: number | null
  onFinish?: () => void
}

const D8: FC<Props> = ({ show, result, onFinish }) => (
  <PopupResult show={show} result={result} diceType={8} onFinish={onFinish} />
)

export default D8
