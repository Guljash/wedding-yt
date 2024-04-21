import { ComputedRef, computed } from 'vue';
import { useRoute } from 'vue-router'


export const useParseNames = (): {
    parseNamesByUrl: ComputedRef<{ name: string; pronoun: string; }>
} => {
    const route = useRoute()

    const parseNamesByUrl = computed(() => {
        switch (route.params.id) {
            case 'mb1lG': {
                return {
                    name: 'Любимая сестра Саша',
                    pronoun: 'тебя'
                }
            }
            case 'mb2lG': {
                return {
                    name: 'Дорогие тетя Юля, дядя Влад, Ксюша и Алина',
                    pronoun: 'вас'
                }
            }
            case 'mb3lG': {
                return {
                    name: 'Дорогие тетя Таня,дядя Сергей, Стас и Настя',
                    pronoun: 'вас'
                }
            }
            case 'mb4lG': {
                return {
                    name: 'Любимая  Лиза и Гоша',
                    pronoun: 'вас'
                }
            }
            case 'mb5lG': {
                return {
                    name: 'Любимая подружка Настя',
                    pronoun: 'тебя'
                }
            }
            case 'mb6lG': {
                return {
                    name: 'Любимая подружка Нелли',
                    pronoun: 'тебя'
                }
            }
            case 'mb7lG': {
                return {
                    name: 'Любимая подружка Надя',
                    pronoun: 'тебя'
                }
            }
            case 'mb8lG': {
                return {
                    name: 'Дорогие тетя Валя, дядя Женя,Рома и Дима',
                    pronoun: 'вас'
                }
            }
            case 'mb9lG': {
                return {
                    name: 'Дорогие тетя Таня, дядя Дима, Аня и Маша',
                    pronoun: 'вас'
                }
            }
            case 'mb10lG': {
                return {
                    name: 'Дорогие Ольга и Максим Игоревич',
                    pronoun: 'вас'
                }
            }
            case 'mb11lG': {
                return {
                    name: 'Дорогие тетя Лена, дядя Андрей и Анечка',
                    pronoun: 'вас'
                }
            }
            case 'mb12lG': {
                return {
                    name: 'Любимая тетя Алла',
                    pronoun: 'тебя'
                }
            }
            case 'mb13lG': {
                return {
                    name: 'Дорогие тетя Наташа, Славик и Денис',
                    pronoun: 'вас'
                }
            }
            case 'mb14lG': {
                return {
                    name: 'Дорогая Натик',
                    pronoun: 'тебя'
                }
            }
            case 'mb15lG': {
                return {
                    name: 'Дорогие Валерий Васильевич и Аза Игнатьева',
                    pronoun: 'вас'
                }
            }
            case 'mb16lG': {
                return {
                    name: 'Дорогие дядя Вася,тетя Оля, Аня и Андрей',
                    pronoun: 'вас'
                }
            }
            case 'mb17lG': {
                return {
                    name: 'Дорогие Андрей, Таня и Илья',
                    pronoun: 'вас'
                }
            }
            case 'mb18lG': {
                return {
                    name: 'Дорогие Сергей, Саша и Наташа',
                    pronoun: 'вас'
                }
            }
            case 'mb19lG': {
                return {
                    name: 'Дорогой Никита',
                    pronoun: 'тебя'
                }
            }
            case 'mb20lG': {
                return {
                    name: 'Дорогой Андрей Сатаневич',
                    pronoun: 'тебя'
                }
            }
            case 'mb21lG': {
                return {
                    name: 'Глеб и Мария',
                    pronoun: 'вас'
                }
            }
            case 'mb22lG': {
                return {
                    name: 'Дорогой Олег Юрьевич',
                    pronoun: 'тебя'
                }
            }
            case 'mb23lG': {
                return {
                    name: 'Дорогие Глеб и Мария',
                    pronoun: 'вас'
                }
            }
            case 'mb24lG': {
                return {
                    name: 'Дорогие Дмитрий и Анастасия',
                    pronoun: 'вас'
                }
            }
            case 'mb25lG': {
                return {
                    name: 'Дорогие Владислав и Елена',
                    pronoun: 'вас'
                }
            }
            case 'mb26lG': {
                return {
                    name: 'Дорогой Илон МАКЕС',
                    pronoun: 'тебя'
                }
            }
            case 'mb27lG': {
                return {
                    name: 'Дорогой Лешкович Павел Петрович',
                    pronoun: 'тебя'
                }
            }
            default: {
                return {
                    name: 'Дорогой гость',
                    pronoun: 'тебя'
                }
            }
        }
    })

    return {
        parseNamesByUrl
    }
}
