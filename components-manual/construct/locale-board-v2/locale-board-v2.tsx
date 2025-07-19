import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components-manual/ui/select-locale'
import React from 'react'

export default function LocaleBoardV2() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="melon">Melon</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </SelectContent>
    </Select>
  )
}
