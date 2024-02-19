import { useState } from "react";

const useOffCanvas = (): [boolean, () => void] => {
    const [isOpened, setIsOpen] = useState(false)

    const toggleIsOpened = () => {
        setIsOpen((prev) => !prev);
    };

    return [isOpened, toggleIsOpened]
}

export default useOffCanvas