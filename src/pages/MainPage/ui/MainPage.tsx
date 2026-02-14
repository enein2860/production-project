import {AppLink} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

function MainPage() {
  return (
    <div>
      <AppLink to="/about">About</AppLink>
      <AppLink to="/">Home</AppLink>
        <ThemeSwitcher />
    </div>
  )
}

export default MainPage
