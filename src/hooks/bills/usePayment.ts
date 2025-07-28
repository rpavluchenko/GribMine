import { useMutation } from '@tanstack/react-query'
import axios, { type AxiosError } from 'axios'
import toast from 'react-hot-toast'

interface PaymentResponse {
  id: string
  status: string
  url: string
}

interface PaymentRequest {
  email: string
  product_id: number
  coupon?: string
}

const handlePaymentRequest = async ({
  email,
  product_id,
  coupon,
}: PaymentRequest): Promise<PaymentResponse> => {
  const response = await axios.post<PaymentResponse>(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/bills/easydonate/checkout`,
    { email, product_id, coupon },
    {
      withCredentials: true,
    }
  )
  return response.data
}

export const usePayment = () => {
  const mutation = useMutation<PaymentResponse, AxiosError, PaymentRequest>({
    mutationFn: handlePaymentRequest,
    onError() {
      toast.error('В данный момент сервер недоступен.')
    },
    onSuccess: (data: PaymentResponse) => {
      const { status, url } = data
      if (status === 'pending' && url) {
        window.location.href = url
      } else {
        toast.error('Произошла ошибка при оплате. Попробуйте позже.')
      }
    },
  })

  const handlePayment = (
    email: string,
    product_id: number,
    coupon?: string
  ) => {
    mutation.mutate({ email, product_id, coupon })
  }

  return { handlePayment, isLoading: mutation.isPending }
}
