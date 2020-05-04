import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  TitleArea,
  Title,
  AreaInfo,
  DescriptionTitle,
  DescriptionText,
  ItemArea,
  ItemText,
} from './styles';

export default function UseDeclaration(props) {
  const navigateBack = () => {
    props.navigation.navigate('LegalInfo');
  };

  return (
    <Container>
      <TitleArea>
        <Icon
          name="arrow-left"
          size={(hp('2.82%'), wp('5%'))}
          color="#625C70"
          style={{ marginLeft: wp('7.5%') }}
          onPress={navigateBack}
        />
        <Title>Informações Legais</Title>
      </TitleArea>
      <AreaInfo showsVerticalScrollIndicator={false}>
        <DescriptionTitle>Declaração de uso</DescriptionTitle>

        <DescriptionText style={{ marginLeft: wp('7.5%') }}>
          Ao aceitar os termos e políticas contidas neste documento você estará
          inequivocamente declarando que:
        </DescriptionText>
        <ItemArea>
          <ItemText>.</ItemText>
          <DescriptionText>
            Todas as informações cadastrais fornecidas por você são verídicas.
          </DescriptionText>
        </ItemArea>
        <ItemArea>
          <ItemText>.</ItemText>
          <DescriptionText>
            Reconhece nosso direito de a qualquer momento verificar as
            informações cadastrais solicitadas e solicitar o envio de
            informações complementares ou documentos comprobatórios das
            informações fornecidas.
          </DescriptionText>
        </ItemArea>
        <ItemArea>
          <ItemText>.</ItemText>
          <DescriptionText>
            Tem plena consciência de que para o devido funcionamento do
            aplicativo, o seu dispositivo móvel tem de atender os requisitos
            mínimos de configuração solicitados.
          </DescriptionText>
        </ItemArea>
        <ItemArea>
          <ItemText>.</ItemText>
          <DescriptionText>
            Tem plena consciência e entende que sendo um aplicativo de conexão
            entre duas pessoas, o bom funcionamento do mesmo depende das bandas
            de conexões locais.
          </DescriptionText>
        </ItemArea>
        <ItemArea>
          <ItemText>.</ItemText>
          <DescriptionText>
            Tem plena consciência e entende que a plataforma Bellamaterna não é
            uma empresa de saúde e deste modo não pode ser responsabilizada
            única ou solidariamente por quaisquer consequências advindas dos
            atendimentos ocorridos através de nossa plataforma.
          </DescriptionText>
        </ItemArea>
        <ItemArea>
          <ItemText>.</ItemText>
          <DescriptionText>
            Tem plena consciência e entende que os profissionais cadastrados em
            nossa plataforma, em momento algum poderão prescrever medicamentos
            controlados, propor tratamentos continuados de qualquer natureza,
            fazer diagnósticos ou emitir opiniões sobre enfermidades ou sintomas
            relatados.
          </DescriptionText>
        </ItemArea>
        <ItemArea>
          <ItemText>.</ItemText>
          <DescriptionText>
            Tem plena consciência e entende que as consultas aos nossos
            profissionais são para apoio e atendimento consultivo através de
            orientação e informação.
          </DescriptionText>
        </ItemArea>
        <ItemArea>
          <ItemText>.</ItemText>
          <DescriptionText>
            Tem plena consciência e entende que emergências de qualquer natureza
            deve ser imediatamente encaminhada ao serviço de emergência local
            (SAMU).
          </DescriptionText>
        </ItemArea>
        <DescriptionText style={{ marginLeft: wp('7.5%') }}>
          Quando do uso de nossa plataforma você ainda declara que:
        </DescriptionText>
        <ItemArea>
          <ItemText>.</ItemText>
          <DescriptionText>
            Só usará a plataforma para consultas relativas a você ou filhos de
            até 2 anos, que estejam cadastrados na plataforma.
          </DescriptionText>
        </ItemArea>
        <ItemArea>
          <ItemText>.</ItemText>
          <DescriptionText>
            Se compromete a não copiar e ou divulgar os conteúdos de qualquer
            natureza contidos na plataforma, sejam estes conteúdos estáticos ou
            não.
          </DescriptionText>
        </ItemArea>
        <ItemArea>
          <ItemText>.</ItemText>
          <DescriptionText>
            Se compromete a não publicar em nossas mídias sociais ou fóruns,
            opiniões pessoais ideológicas, ou ofensivas sob quaisquer aspectos
            sociais, filosóficos, políticos, culturais, raciais ou religiosos,
            sob pena de ter seu acesso as mesmas bloqueado, e em caso de
            reincidência, descadastramento definitivo da plataforma.
          </DescriptionText>
        </ItemArea>
        <ItemArea>
          <ItemText>.</ItemText>
          <DescriptionText>
            Concorda com a publicação e uso irrestrito por parte do Bellamaterna
            de conteúdo, sugestões, ideias de melhorias e imagens geradas e
            postadas por você em nossas redes sociais ou quaisquer meios de
            publicação de nossa plataforma ou de nossos licenciados, abrindo mão
            de qualquer meio de remuneração ou ressarcimento por parte do
            Bellamaterna, incluindo Royalties, direitos autorais e patentes.
          </DescriptionText>
        </ItemArea>
        <ItemArea>
          <ItemText>.</ItemText>
          <DescriptionText>
            Que concorda em fornecer atualizar os dados solicitados da evolução
            da gestação, desenvolvimento do(s) bebe(s) e evolução pós parto da
            mãe, para o devido acompanhamento e pleno uso de todas as
            funcionalidades existentes e que virão a existir na plataforma.
          </DescriptionText>
        </ItemArea>
        <ItemArea>
          <ItemText>.</ItemText>
          <DescriptionText>
            Tem pleno conhecimento e entende que o não fornecimento dos dados
            referidos acima, irão limitar o uso da plataforma, podendo não
            trazer as vantagens que a plataforma propaga.
          </DescriptionText>
        </ItemArea>
      </AreaInfo>
    </Container>
  );
}
