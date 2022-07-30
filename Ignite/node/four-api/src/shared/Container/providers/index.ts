import { DayjsDateProvider } from '@shared/Container/providers/DateProvider/implementations/DayjsDateProvider';
import { container } from "tsyringe";
import { IDateProvider } from "./DateProvider/IDateProvider";

container.registerSingleton<IDateProvider>(
    "DayjsDateProvider",
    DayjsDateProvider
)
