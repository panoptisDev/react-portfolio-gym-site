import {
  FeaturesContainer,
  FeaturesH1,
  FeaturesList,
  FeaturesItem,
  ListIcon
} from './FeaturesElements';


function Features({ data }) {
  return (
    <FeaturesContainer>
        <FeaturesH1>What We Offer</FeaturesH1>
        {data.map((feature, index) => {
          return (
          <FeaturesList key={index}>
            <FeaturesItem>
              <ListIcon />
              {feature.title}
            </FeaturesItem>
          </FeaturesList>
          )
        })}
    </FeaturesContainer>
  )
}

export default Features