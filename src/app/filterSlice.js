import { createSlice } from "@reduxjs/toolkit"
import student from '../assets/icon/student.svg'
import icon_photo from '../assets/icon/icon_photo.svg'
import germany from '../assets/lang/germany.svg'
import poland from '../assets/lang/poland.svg'
import russia from '../assets/lang/russia.svg'
import spain from '../assets/lang/spain.svg'
import uk from '../assets/lang/uk.svg'
import ukraine from '../assets/lang/ukraine.svg'


const initialState = {
    filter: [
        {
            title: 'Возраст',
            id: 1,
            min: 18,
            max: 99,
            type: 'slider'
        },
        {
            title: 'Желаемая зарплата в гривне',
            id: 2,
            min: 10000,
            max: 50000,
            type: 'slider',
            switch: [
                { 
                    text: 'Не показывать без зарплаты',
                    photo: null
                 }
             ]
        },
        {
            title: 'Опыт работы',
            id: 3,
            type: 'checkbox',
            items: [
                {experience: 'Без опыта',
                qtty: '603'},
                {experience: 'До 1 года',
                qtty: '603'},
                {experience: 'От 1 до 2 лет',
                qtty: '603'},
                {experience: 'От 2 до 5 лет',
                qtty: '603'},
                {experience: 'От 5 до 10 лет',
                qtty: '603'},
                {experience: 'Более 10 лет',
                qtty: '603'},
            ],
            switch: [
               { 
                   text: 'Только студенты',
                   photo: student
                }
            ]
        },
        {
            title: 'Тип занятости',
            id: 4,
            type: 'checkbox',
            items: [
                {experience: 'Полная занятость',
                qtty: '34567'},
                {experience: 'Неполная занятость',
                qtty: '876'},
                {experience: 'Удаленная работа',
                qtty: '1234'},
            ],
        },
        {
            title: 'Образование',
            id: 5,
            type: 'checkbox',
            items: [
                {experience: 'Высшее',
                qtty: '34567'},
                {experience: 'Неоконченное высшее',
                qtty: '876'},
                {experience: 'Средне-специальное',
                qtty: '1234'},
                {experience: 'Среднее',
                qtty: '8764'},
            ],
        },
        {
            id: 6,
            switch: [
               { 
                   text: 'Только с фотографией',
                   photo: icon_photo
                }   
            ]
        },
        {
            title: 'Пол',
            id: 7,
            tab: [
                {name: 'Любой', active: true},
                {name: 'Женщины', active: false},
                {name: 'Мужчины', active: false}
            ]
        },
        {
            title: 'Владение языками',
            id: 8,
            type: 'checkbox',
            items: [
                {experience: 'Английский',
                qtty: '34567',
                photo: uk,
                items:[
                    {experience: '(А1) – начальный',
                    qtty: '73',},
                    {experience: '(А2) – ниже среднего',
                    qtty: '73',},
                    {experience: '(В1) – средний',
                    qtty: '73',},
                    {experience: '(В2) – выше среднего',
                    qtty: '73',},
                    {experience: '(C1) – продвинутый',
                    qtty: '73',},
                    {experience: '(C2) – профессиональный уровень владения',
                    qtty: '73',}
                ]},
                {experience: 'Русский',
                qtty: '876',
                photo: russia},
                {experience: 'Украинский',
                qtty: '1234',
                photo: ukraine},
                {experience: 'Немецкий',
                qtty: '34567',
                photo: germany},
                {experience: 'Польский',
                qtty: '876',
                photo: poland},
                {experience: 'Испанский',
                qtty: '1234',
                photo: spain},
            ],
        },
    ], 
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeActiveTab: (state, actions) =>{
           const item =  state.filter.filter(item => item.tab.length > 0)
           const itemChange = item.filter(el => el.name == actions.payload)
        }
    }
})

const {actions, reducer} = filterSlice;

export default reducer;
export const {
   changeActiveTab
} = actions;