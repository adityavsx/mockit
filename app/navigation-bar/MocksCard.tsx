import MockItem from './MockItem'

export default function MocksCard() {
    return (
        <div>
            <div className="bg-transparent  font-medium underline w-40 my-2">
                MOCKS
            </div>
            <ul>
                <MockItem name="JEE-MAINS MOCK 2"/>
            </ul>
        </div>
    )
}