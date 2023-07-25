import Image from 'next/image'
import deleteIcon from '../assets/svg/delete-bin-5-fill.svg'
import editIcon from '../assets/svg/edit-2-fill.svg'
import addIcon from '../assets/svg/add-box-fill.svg'
import saveIcon from '../assets/svg/save-fill.svg'

export const Button = ({ cta, clickHandler }) => {
    return (
        <button onClick={clickHandler} className={`px-6 py-3 rounded-lg bg-slate-700 hover:bg-orange-500 text-slate-400 text-base font-semibold transition-all hover:scale-95 hover:text-slate-900`} type="submit">{cta === "Add Note" || cta === "Delete All Notes" || cta === "Edit" || cta === "Delete" || cta === "Save" && saveIcon ?
            <Image
                className='invert opacity-80'
                src={cta === "Add Note" && addIcon || cta === "Delete All Notes" && deleteIcon || cta === "Edit" && editIcon || cta === "Delete" && deleteIcon || cta === "Save" && saveIcon}
                alt={cta}
                width={24}
                height={24}
            /> : cta }
        </button>
    )
}