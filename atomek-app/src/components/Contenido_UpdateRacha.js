import React, {Component, useEffect, useState} from 'react'
import ContTextRacha from '../components/Conten_UpdRacha_Texto';
import ContImagRacha from '../components/Conten_UpdRacha_Imagen';
import { StreakGetById } from '../services/StreakServices';
import { SubscriptionGetByStreakAndUser } from '../services/SubscriptionServices';
import { useParams } from 'react-router-dom';

const RenderizadoTipoRacha = () => {
  const [subscription, setSubscription] = useState();
  const [tipo, setTipo] = useState(false);
  const params = useParams();

  async function getInitialInformation() {
    try {

      const userJSON = localStorage.getItem("UserSession");
      const usuario = (JSON.parse(userJSON));

      const responseSubscription = await SubscriptionGetByStreakAndUser({
        _streak: params.id,
        _user: usuario._id
      });

      if(responseSubscription._streak.type == 1) { setTipo(false); }
      else { setTipo(true); }

      console.log(responseSubscription);
      setSubscription(responseSubscription);
    }
    catch(err) {
        console.log(err);
    }
  }

  useEffect(() => {
    getInitialInformation();
  }, []);

  return (
    <div>
      {tipo?<ContTextRacha propSubscription={subscription} />:  <ContImagRacha propSubscription={subscription}/>}
    </div>
  )
}

export default RenderizadoTipoRacha