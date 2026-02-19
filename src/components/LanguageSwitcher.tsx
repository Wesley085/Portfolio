import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const currentLanguage = i18n.language;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="w-9 h-9 rounded-full hover:bg-transparent text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                    <Globe className="h-5 w-5" />
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage('pt')} className={currentLanguage === 'pt' ? 'bg-accent' : ''}>
                    🇧🇷 Português
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('en')} className={currentLanguage === 'en' ? 'bg-accent' : ''}>
                    🇺🇸 English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('es')} className={currentLanguage === 'es' ? 'bg-accent' : ''}>
                    🇪🇸 Español
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
