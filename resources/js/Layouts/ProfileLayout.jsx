import MainMenu from "../Components/MainMenu";
import WordSenseLogo from "../Components/WordSenseLogo";

export default function ProfileLayout({children, ...props}){
    return <div className="container mx-auto h-full min-h-svh grid grid-rows-[auto_minmax(0,_1fr)]">
        <div className="pt-6 flex items-start gap-6">
            <WordSenseLogo className="w-[250px]" />
            <MainMenu />
        </div>
        <div>
            {children}
        </div>
    </div>
}