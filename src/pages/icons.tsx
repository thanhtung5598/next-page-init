import dynamic from 'next/dynamic';

const trueIcon = (name: string) => {
  return !name.includes('index.tsx') && name.slice(-4) === '.tsx';
};

const trimImageName = (name: string) => {
  return name.replace(/^\.\//, '').replace(/\.tsx$/, '');
};

const images = (require as any).context('../assets/icons', true);
const imageKeys: string[] = images.keys().filter(trueIcon);
const defaultSize = 52;

const NoSsrPage = () => {
  const copy = (name: string) => {
    navigator.clipboard.writeText(`<${name} />`);
  };

  return (
    <div className="grid grid-cols-8 gap-5 p-4">
      {imageKeys.map((image, index: number) => {
        let iconName: string = '';
        const img = images(image);
        let el: any = null;
        if (!img.default) {
          const keys = Object.keys(img);
          if (keys.length === 0) {
            return undefined;
          }
          iconName = String(keys[0]);
          el = img[iconName];
        } else {
          el = img.default;
          iconName = trimImageName(img.default.name);
        }
        return (
          <div
            key={`icon-preview-${index + 1}`}
            onClick={() => copy(iconName)}
            className="flex-center cursor-pointer !flex-col gap-2 rounded-xl bg-[rgba(0,0,0,0.1)] px-5 py-3 text-black"
            aria-hidden="true"
          >
            <b>{iconName}</b>
            {el({
              size: defaultSize,
              width: `${defaultSize}px`,
              height: `${defaultSize}px`,
            })}
          </div>
        );
      })}
    </div>
  );
};

export default dynamic(() => Promise.resolve(NoSsrPage), {
  ssr: false,
});
