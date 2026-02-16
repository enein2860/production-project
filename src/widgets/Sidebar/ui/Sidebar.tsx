import classNames from 'classnames';
import cls from "./Sidebar.module.scss";
import {useState} from "react";
import {Button} from "shared/ui/Button/Button";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface sidebarProps {
    className?: string;
}

export const Sidebar = ({className}: sidebarProps) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleSidebar = () => setCollapsed(!collapsed);

    return (
        <div className={classNames(
            cls.sidebar,
            {[cls.collapsed]: collapsed},
            [className]
        )}>
            <Button onClick={toggleSidebar}>
                {collapsed ? 'Открыть' : 'Свернуть'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );

};