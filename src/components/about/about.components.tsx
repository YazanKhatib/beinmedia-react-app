import * as React from 'react';
import {
  Container,
  Bio,
  Text,
  Subject,
  Tag,
  Tags,
  TagText,
} from './about.style';

export const About: React.FC = () => {
  return (
    <Container>
      <Bio>
        <Text>
          هند الناهض مستشارة إعلام رقمي, مستشارة الإعلام الإلكتروني لمكتب وكيل
          وزارة الإعلام الكويتية وهي المؤسسة لشركة “سوشالوبي” للخدمات المختصة في
          مجال الإعلام الإجتماعي , بالإضافة الى إنها مستشارة في مجال التواصل
          الاجتماعي.هند الناهض مستشارة إعلام رقمي, مستشارة الإعلام الإلكتروني
          لمكتب وكيل وزارة الإعلام الكويتية وهي المؤسسة لشركة “سوشالوبي” للخدمات
          المختصة في مجال الإعلام الإجتماعي , بالإضافة الى إنها مستشارة في مجال
          التواصل الاجتماعي.
        </Text>
      </Bio>
      <Subject>الخبرات</Subject>
      <Tags>
        <Tag>
          <TagText>التحدث أمام الجمهور</TagText>
        </Tag>
        <Tag>
          <TagText>القيادة</TagText>
        </Tag>
        <Tag>
          <TagText>ريادة الأعمال</TagText>
        </Tag>
        <Tag>
          <TagText>الدعاية والإعلان</TagText>
        </Tag>
        <Tag>
          <TagText>الإعلام</TagText>
        </Tag>
        <Tag>
          <TagText>القيادة</TagText>
        </Tag>
        <Tag>
          <TagText>مشاركة العملاء</TagText>
        </Tag>
        <Tag>
          <TagText>المشاريع الصغيرة</TagText>
        </Tag>
        <Tag>
          <TagText>تطوير الأعمال</TagText>
        </Tag>
      </Tags>
    </Container>
  );
};
