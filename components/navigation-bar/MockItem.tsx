'use client'
import LibraryBooksTwoToneIcon from '@mui/icons-material/LibraryBooksTwoTone';

// This is the click
function mockClicked() {
    console.log('mock-clicked')
}

export default function NavbarCardItem(props: {
    name: string
}) {
    return (
        <div className="flex group h-full">
            <div className="w-full font-regular text-sm flex transition-colors duration-500 ease-in-out hover:bg-mock-item-hover rounded p-2 cursor-pointer" onClick={mockClicked}>
                <LibraryBooksTwoToneIcon style={{
                    color: '#000320',
                    width: "30px"
                }}/>
                <text className="mx-3">
                    {props.name}
                </text>
            </div>
        </div>
    )
}