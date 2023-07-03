import { useMemo } from 'react'

import { CONSTANTS } from '@/constants'
import { useQueryParams } from '@/hooks/useQueryParams'

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
  const { getQueryParam } = useQueryParams()

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
        defaultValue={getQueryParam('category') || CONSTANTS.CATEGORIES[0]}
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
