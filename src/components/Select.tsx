import { Picker } from '@react-native-picker/picker'
import { selectStyles } from '../styles/select'

type SelectType = {
    itens:{label:string, value:string}[],
    selectedItem:any,
    setItem:any
}

const Select:React.FC<SelectType> = ({itens, selectedItem, setItem}) => {

    return (
        <Picker
            style={selectStyles.select}
            selectedValue={selectedItem}
            onValueChange={(item, i)=>{
                setItem(item)
            }}
        >
            { itens.map((item, i)=>(
                <Picker.Item key={i} label={item.label} value={item.value} />
            ))}
            
        </Picker>
    )
}   
export default Select;