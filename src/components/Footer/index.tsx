import { Question, Users, VideoCamera } from 'phosphor-react'
import React from 'react'
import { Footer } from './styles'

const FooterContainer= () => {
  return (
    <Footer>
        <div>
          <div>
            <img src="../group.svg" alt="" />
            <span>Grupos</span>
          </div>
          <div>
            <img src="../message.svg" alt="" />
            <span>Mensagens</span>
          </div>
          <div>
            <img src="../bot.svg" alt="" />
            <span>Dúvidas</span>
          </div>
        </div>
      </Footer>
  )
}

export default FooterContainer