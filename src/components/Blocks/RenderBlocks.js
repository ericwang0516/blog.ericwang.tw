import PhotographyBlock from './PhotographyBlock';
import FoodTravelBlock from './FoodTravelBlock';
import RichTextBlock from './RichTextBlock';

const blockComponents = {
  photography: PhotographyBlock,
  foodTravel: FoodTravelBlock,
  richText: RichTextBlock,
};

export default function RenderBlocks({ layout }) {
  if (!layout || !Array.isArray(layout)) return null;

  return (
    <>
      {layout.map((block, index) => {
        const Block = blockComponents[block.blockType];

        if (Block) {
          return (
            <section key={index} style={{ marginBottom: '4rem' }}>
              <Block {...block} />
            </section>
          );
        }

        console.warn(`未知的區塊類型: ${block.blockType}`);
        return null;
      })}
    </>
  );
}
