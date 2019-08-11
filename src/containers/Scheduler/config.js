export const COMPONENTS = {
  dateTime: 1,
  weekDays: 1 << 1,
  months: 1 << 2,
  monthDays: 1 << 3
}

export const COMPONENT_STATE = {
  once: 0,
  everyDay: COMPONENTS.dateTime,
  everyWeek: COMPONENTS.dateTime | COMPONENTS.weekDays,
  everyMonth: COMPONENTS.dateTime | COMPONENTS.monthDays,
  everyYear: COMPONENTS.dateTime | COMPONENTS.monthDays | COMPONENTS.months
}
