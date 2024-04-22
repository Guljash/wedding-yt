import { ComputedRef, computed } from 'vue';
import { useRoute } from 'vue-router'


export const useParseNames = (): {
    parseNamesByUrl: ComputedRef<{ name: string; pronoun: string; welcomeText: string }>
} => {
    const route = useRoute()

    const parseNamesByUrl = computed(() => {
        switch (route.params.id) {
            case 'mb1lG': {
                return {
                    name: 'Любимая сестра Саша',
                    pronoun: 'тебя',
                    welcomeText: 'Ты придёшь'
                }
            }
            case 'mb2lG': {
                return {
                    name: 'Дорогие тетя Юля, дядя Влад, Ксюша и Алина',
                    pronoun: 'вас',
                    welcomeText: 'Вы придёте'
                }
            }
            case 'mb3lG': {
                return {
                    name: 'Дорогие тетя Таня,дядя Сергей, Стас и Настя',
                    pronoun: 'вас',
                    welcomeText: 'Вы придёте'
                }
            }
            case 'mb4lG': {
                return {
                    name: 'Любимая  Лиза и Гоша',
                    pronoun: 'вас',
                    welcomeText: 'Вы придёте'
                }
            }
            case 'mb5lG': {
                return {
                    name: 'Любимая подружка Настя',
                    pronoun: 'тебя',
                    welcomeText: 'Ты придёшь'
                }
            }
            case 'mb6lG': {
                return {
                    name: 'Любимая подружка Нелли',
                    pronoun: 'тебя',
                    welcomeText: 'Ты придёшь'
                }
            }
            case 'mb7lG': {
                return {
                    name: 'Любимая подружка Надя',
                    pronoun: 'тебя',
                    welcomeText: 'Ты придёшь'
                }
            }
            case 'mb8lG': {
                return {
                    name: 'Дорогие тетя Валя, дядя Женя,Рома и Дима',
                    pronoun: 'вас',
                    welcomeText: 'Вы придёте'
                }
            }
            case 'mb9lG': {
                return {
                    name: 'Дорогие тетя Таня, дядя Дима, Аня и Маша',
                    pronoun: 'вас',
                    welcomeText: 'Вы придёте'
                }
            }
            case 'mb10lG': {
                return {
                    name: 'Дорогие Ольга и Максим Игоревич',
                    pronoun: 'вас',
                    welcomeText: 'Вы придёте'
                }
            }
            case 'mb11lG': {
                return {
                    name: 'Дорогие тетя Лена, дядя Андрей и Анечка',
                    pronoun: 'вас',
                    welcomeText: 'Вы придёте'
                }
            }
            case 'mb12lG': {
                return {
                    name: 'Любимая тетя Алла',
                    pronoun: 'тебя',
                    welcomeText: 'Ты придёшь'
                }
            }
            case 'mb13lG': {
                return {
                    name: 'Дорогие тетя Наташа, Славик и Денис',
                    pronoun: 'вас',
                    welcomeText: 'Вы придёте'
                }
            }
            case 'mb14lG': {
                return {
                    name: 'Дорогая Натик',
                    pronoun: 'тебя',
                    welcomeText: 'Ты придёшь'
                }
            }
            case 'mb15lG': {
                return {
                    name: 'Дорогие Валерий Васильевич и Аза Игнатьева',
                    pronoun: 'вас',
                    welcomeText: 'Вы придёте'
                }
            }
            case 'mb16lG': {
                return {
                    name: 'Дорогие дядя Вася,тетя Оля, Аня и Андрей',
                    pronoun: 'вас',
                    welcomeText: 'Вы придёте'
                }
            }
            case 'mb17lG': {
                return {
                    name: 'Дорогие Андрей, Таня и Илья',
                    pronoun: 'вас',
                    welcomeText: 'Вы придёте'
                }
            }
            case 'mb18lG': {
                return {
                    name: 'Дорогие Сергей, Саша и Наташа',
                    pronoun: 'вас',
                    welcomeText: 'Вы придёте'
                }
            }
            case 'mb19lG': {
                return {
                    name: 'Дорогой Никита',
                    pronoun: 'тебя',
                    welcomeText: 'Ты придёшь'
                }
            }
            case 'mb20lG': {
                return {
                    name: 'Дорогой Андрей Сатаневич',
                    pronoun: 'тебя',
                    welcomeText: 'Ты придёшь'
                }
            }
            case 'mb21lG': {
                return {
                    name: 'Глеб и Мария',
                    pronoun: 'вас',
                    welcomeText: 'Вы придёте'
                }
            }
            case 'mb22lG': {
                return {
                    name: 'Дорогой Олег Юрьевич',
                    pronoun: 'тебя',
                    welcomeText: 'Ты придёшь'
                }
            }
            case 'mb23lG': {
                return {
                    name: 'Дорогие Глеб и Мария',
                    pronoun: 'вас',
                    welcomeText: 'Вы придёте'
                }
            }
            case 'mb24lG': {
                return {
                    name: 'Дорогие Дмитрий и Анастасия',
                    pronoun: 'вас',
                    welcomeText: 'Вы придёте'
                }
            }
            case 'mb25lG': {
                return {
                    name: 'Дорогие Владислав и Елена',
                    pronoun: 'вас',
                    welcomeText: 'Вы придёте'
                }
            }
            case 'mb26lG': {
                return {
                    name: 'Дорогой Илон МАКЕС',
                    pronoun: 'тебя',
                    welcomeText: 'Ты придёшь'
                }
            }
            case 'mb27lG': {
                return {
                    name: 'Дорогой Лешкович Павел Петрович',
                    pronoun: 'тебя',
                    welcomeText: 'Ты придёшь'
                }
            }
            default: {
                return {
                    name: 'Дорогой гость',
                    pronoun: 'тебя',
                    welcomeText: 'Ты придёшь'
                }
            }
        }
    })

    return {
        parseNamesByUrl
    }
}
