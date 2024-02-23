import { Data } from '@/@types';
import Button from '@/components/ui/Button';

function DataAction({ title, description, buttonText }: Data) {
  return (
    <div className={`flex flex-col gap-6 lg:gap-9 mt-5`}>
      <h3 className={`text-Grey-G700 text-xl font-medium`}>{title}</h3>
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <p className="text-Grey-G100 text-sm w-[98%] md:w-[58%]">{description}</p>
        <div className="flex justify-end mt-6 md:mt-0">
          <Button type="button" title="password-button" styles="text-white-N0 font-bold text-sm py-3 px-[1.12rem]">
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DataAction;
