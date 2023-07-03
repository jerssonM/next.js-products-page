import { useMemo } from 'react'

import { CONSTANTS } from '@/constants'

import {
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from './ui'

type CategoriesSelectProps = {
  onChange: (value: string) => void
}

export const CategoriesSelect = ({ onChange }: CategoriesSelectProps) => {
  const renderItems = useMemo(
    () =>
      CONSTANTS.CATEGORIES.map((category) => (
        <SelectItem key={category} value={category}>
          {category}
        </SelectItem>
      )),
    []
  )

  const handleChangeOption = (value: string) => {
    const isDefaultValue = value === CONSTANTS.CATEGORIES[0]
    onChange(isDefaultValue ? '' : value)
  }

  return (
    <>
      <Select
        defaultValue={CONSTANTS.CATEGORIES[0]}
        onValueChange={handleChangeOption}
      >
        <SelectTrigger>
          <SelectValue placeholder="Filter by category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Filter by category</SelectLabel>
            {renderItems}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  )
}
